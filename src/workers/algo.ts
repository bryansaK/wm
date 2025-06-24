import { filteredMatches } from "interfaces/betting";

/* eslint-disable no-restricted-globals */
self.onmessage = (event) => {
    // Récupération des données envoyées deouis hompage.tsx (voir dans le useEffect)
    const { matches, min, max, start = 0, limit = 20 } = event.data;
    const result: filteredMatches[] = [];

    const totalMatches = matches.length;

     // Boucle sur toutes les combinaisons possibles de 3 matchs différents
    for (let i = 0; i < totalMatches - 2; i++) {
        for (let j = i + 1; j < totalMatches - 1; j++) {
            for (let k = j + 1; k < totalMatches; k++) {
                const matchA = matches[i].outcomes;
                const matchB = matches[j].outcomes;
                const matchC = matches[k].outcomes;
                const matchAId = matches[i].matchId;
                const matchBId = matches[j].matchId;
                const matchCId = matches[k].matchId;
                const matchAName = matches[i].tournamentName;
                const matchBName = matches[j].tournamentName;
                const matchCName = matches[k].tournamentName;

                 // Boucle sur toutes les cotes des matchs
                for (const coteA of matchA) {
                    const indexA = matchA.indexOf(coteA);
                    for (const coteB of matchB) {
                        const indexB = matchB.indexOf(coteB);
                        for (const coteC of matchC) {
                            const indexC = matchC.indexOf(coteC);
                            const combined = coteA.odds * coteB.odds * coteC.odds;
                            if (combined >= min && combined <= max) {
                                result.push({
                                    matches: [indexA, indexB, indexC],
                                    matchesId: [matchAId, matchBId, matchCId],
                                    matchesName: [matchAName, matchBName, matchCName],
                                    cotes: [coteA.odds, coteB.odds, coteC.odds],
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
    const paginated = result.slice(start, start + limit);

    self.postMessage({
        total: result.length, // pour afficher le nombre total a utiliser dans la pagination
        data: paginated,
    });
};

export { };