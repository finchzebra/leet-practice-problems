var longestCommonPrefix = function(strs) {
    let common = '';
    let allShared = true;
    while (allShared) {
        for (let i = 0; i < strs[0].length; i++) {
            let lookingAt = strs[0][i];
            for (let j = 1; j < strs.length; j++) {
                if (lookingAt !== strs[j][i]) {
                    allShared = false;
                }
            }
            if (allShared) {
                common = common + lookingAt;
            }
        }
    }
    return common;
};
