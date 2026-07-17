import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HomeFinder } from '../../../../org/graalvm/home/HomeFinder.d.ts'
export class DefaultHomeFinder extends HomeFinder {
    static getInstance(): HomeFinder;
    constructor()
    // private graalVMHome: Object;
    readonly languageHomes: JavaMap<string, Path>;
    readonly toolHomes: JavaMap<string, Path>;
    // private verbose: boolean;
    readonly version: string;
    // private collectStandaloneHomes(): JavaMap<string, Path>;
    // private getGraalVmHomeNative(): Path;
    getHomeFolder(): Path;
    getLanguageHomes(): JavaMap<string, Path>;
    getToolHomes(): JavaMap<string, Path>;
    getVersion(): string;
    // private isVerbose(): boolean;
    // private searchHomeFolder(): Path;
    // private verbose(...args: Object[]): void;
}