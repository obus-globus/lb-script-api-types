import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class HomeFinder extends Object {
    static getInstance(): HomeFinder;
    constructor()
    getHomeFolder(): Path[];
    getLanguageHomes(): { [key: string]: Path[] };
    getToolHomes(): { [key: string]: Path[] };
    getVersion(): string;
}