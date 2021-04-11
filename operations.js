const operations = {
    mean: nums => {
        return nums.reduce((a, b) => a + b) / nums.length;
    },
    median: nums => {
        const sorted = nums.sort((a, b) => a - b);
        if (sorted.length % 2 !== 0) {
            const medIndex = Math.floor(sorted.length / 2);
            return sorted[medIndex];
        } else {
            const median = sorted[sorted.length / 2],
                median2 = sorted[(sorted.length / 2) - 1];
            return (median + median2) / 2;
        }
    },
    mode: nums => {
        const occurences = {}
        for (let num of nums) {
            if (!occurences[num]) {
                occurences[num] = 1;
            } else {
                occurences[num] ++;
            }
        }
        const max = Math.max(...Object.values(occurences));
        for (let key of Object.keys(occurences)) {
            if (occurences[key] === max) return parseInt(key);
        }
    }
}

module.exports = operations;