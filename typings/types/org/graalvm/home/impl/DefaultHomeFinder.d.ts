import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HomeFinder } from '../../../../org/graalvm/home/HomeFinder.d.ts'
export class DefaultHomeFinder extends HomeFinder {
    static getInstance(): HomeFinder;
    constructor()
    // private graalVMHome: Object;
    readonly languageHomes: { [key: string]: Path[] };
    readonly toolHomes: { [key: string]: Path[] };
    // private verbose: boolean;
    readonly version: string;
    // private collectStandaloneHomes(): { [key: string]: Path[] };
    // private getGraalVmHomeNative(): Path[];
    getHomeFolder(): Path[];
    getLanguageHomes(): { [key: string]: Path[] };
    getToolHomes(): { [key: string]: Path[] };
    getVersion(): string;
    // private isVerbose(): boolean;
    // private searchHomeFolder(): Path[];
    // private verbose(args: Object[]): void;
}