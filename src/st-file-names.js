/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
    const files = {};


    return names
        .map(name => {
            if(!files['' + name]) {
                console.log(files,name)
                files['' + name] = 1;
                return name;
            }
            files['' + name] += 1;
            const newFileName = name + '(' + (files[name] - 1) + ')';
            files[newFileName] = 1;
            console.log(files, name, newFileName)
            return newFileName;
        })
}
