self.onmessage = (event) => {
    const { matches, min, max } = event.data;

    const result: {
        matches: [number, number, number];
        cotes: [number, number, number];
        coteFinale: number;
    }[] = [];

    const totalMatches = matches.length;

    //les 3 boucles sont nécéssaires pour tester toutes les combi si un gros for alors seulement les consécutifs
    // Boucle sur le 1er match
    for (let i = 0; i < totalMatches - 2; i++) {
        // Boucle sur le 2e match (différent du 1er)
        for (let j = i + 1; j < totalMatches - 1; j++) {
            // Boucle sur le 3e match (différent des 2 premiers)
            for (let k = i + 2; k < totalMatches; k++) {
                const matchA = matches[i];
                const matchB = matches[j];
                const matchC = matches[k];

                // Outcomes numéro 2
                for (const coteA of matchA) {
                    // Outcomes numéro 2
                    for (const coteB of matchB) {
                        // Outcomes numéro 3 du match C
                        for (const coteC of matchC) {
                            const combined = coteA * coteB * coteC;

                            if (combined >= min && combined <= max) {
                                result.push({
                                    matches: [i, j, k],
                                    cotes: [coteA, coteB, coteC],
                                    coteFinale: combined,
                                });
                            }
                        }
                    }
                }
            }
        }
    }

    result.sort((a, b) => a.coteFinale - b.coteFinale);
    self.postMessage(result);

    /** exmple d'Utilisation
    // @ts-ignore
    const worker = new Worker(new URL('./workers/tripletWorker.ts', import.meta.url), {
    type: 'module',
        });
    worker.postMessage({ matches, min, max });

    worker.onmessage = (event) => {
    };
  }, []); */
};

export { };
