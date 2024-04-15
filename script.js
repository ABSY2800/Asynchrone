async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value); 
    }
}


iterateWithAsyncAwait([1, 2, 3, 4]);

async function waitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error.message);
    }
}

async function waitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Échec de la requête');
        }
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error.message);
    }
}
async function chainedAsyncFunctions() {
    async function firstAsyncFunction() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Première fonction terminée');
    }

    async function secondAsyncFunction() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Deuxième fonction terminée');
    }

    async function thirdAsyncFunction() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Troisième fonction terminée');
    }

    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
}


chainedAsyncFunctions();

async function concurrentRequests() {
    try {
        const [result1, result2] = await Promise.all([
            fetch('https://api.example.com/data1'),
            fetch('https://api.example.com/data2')
        ]);

        const data1 = await result1.json();
        const data2 = await result2.json();

        console.log('Résultat 1:', data1);
        console.log('Résultat 2:', data2);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error.message);
    }
}

async function parallelCalls(urls) {
    try {
        const requests = urls.map(url => fetch(url));
        const responses = await Promise.all(requests);

        const responseData = await Promise.all(responses.map(res => res.json()));

        console.log('Réponses obtenues:', responseData);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error.message);
    }
}

// Exemple d'utilisation
parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2']);
