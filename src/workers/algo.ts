import { filteredMatches } from "interfaces/betting";

/* eslint-disable no-restricted-globals */
self.onmessage = (event) => {
    const { matches, min, max, start = 0, limit = 20 } = event.data;
    const result: filteredMatches[] = [];

    const totalMatches = matches.length;

    for (let i = 0; i < totalMatches - 2; i++) {
        for (let j = i + 1; j < totalMatches - 1; j++) {
            for (let k = i + 2; k < totalMatches; k++) {
                const matchA = matches[i].outcomes;
                const matchB = matches[j].outcomes;
                const matchC = matches[k].outcomes;
                const matchAId = matches[i].matchId;
                const matchBId = matches[j].matchId;
                const matchCId = matches[k].matchId;
                const matchAName = matches[i].tournamentName;
                const matchBName = matches[j].tournamentName;
                const matchCName = matches[k].tournamentName;
                for (const coteA of matchA) {
                    for (const coteB of matchB) {
                        for (const coteC of matchC) {
                            const combined = coteA.odds * coteB.odds * coteC.odds;
                            if (combined >= min && combined <= max) {
                                result.push({
                                    matches: [i, j, k],
                                    matchesId: [matchAId, matchBId, matchCId],
                                    matchesName: [matchAName, matchBName, matchCName],
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
    const paginated = result.slice(start, start + limit);

    self.postMessage({
        total: result.length, // pour afficher le nombre total a utiliser dans la pagination
        data: paginated,
    });
};

export { };