import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class HomeFinder extends Object {
    static getInstance(): HomeFinder;
    constructor()
    getHomeFolder(): Path;
    getLanguageHomes(): JavaMap<string, Path>;
    getToolHomes(): JavaMap<string, Path>;
    getVersion(): string;
}