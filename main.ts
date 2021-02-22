export function isValidWalk(walk: string[]) {
    if (walk.length === 10) {
        let coord: number = 0;
        walk.forEach((ele:string) => {
            if (ele === 'n' || ele === 'w') {
                coord += 1;
            } else if (ele === 's' || ele === 'e') {
                coord -= 1;
            }
            return coord
        })
        return (coord === 0)
    } else {
        return (walk.length === 10)
    }

}

