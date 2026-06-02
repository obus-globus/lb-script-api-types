import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MCEFPlatform } from '../../../../net/ccbluex/liquidbounce/mcef/MCEFPlatform.d.ts'
import type { MCEFProgressListener } from '../../../../net/ccbluex/liquidbounce/mcef/listeners/MCEFProgressListener.d.ts'
export class MCEFDownloadManager extends Object {
    constructor(arg0: string[], arg1: string, arg2: MCEFPlatform, arg3: File)
    readonly commitDirectory: File;
    hostCounter: number;
    readonly hosts: string[];
    // private javaCefCommitHash: string;
    // private platform: MCEFPlatform;
    readonly platformDirectory: File;
    // private progressListener: MCEFProgressListener;
    // private progressListeners: MCEFProgressListener[];
    // private compareChecksum(arg0: File): boolean;
    // private compareChecksum(arg0: File, arg1: File): boolean;
    downloadJcef(): void;
    // private formatURL(arg0: string): string;
    getCommitDirectory(): File;
    getHosts(): string[];
    getJavaCefChecksumDownloadUrl(): string;
    getJavaCefDownloadUrl(): string;
    getPlatformDirectory(): File;
    isSystemCompatible(): boolean;
    registerProgressListener(arg0: MCEFProgressListener): void;
    requiresDownload(): boolean;
    unregisterProgressListener(arg0: MCEFProgressListener): void;
}