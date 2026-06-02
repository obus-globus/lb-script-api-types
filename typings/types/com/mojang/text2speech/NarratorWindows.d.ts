import type { Narrator } from '../../../com/mojang/text2speech/Narrator.d.ts'
import type { Unknown } from '../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Guid$IID } from '../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class NarratorWindows extends Unknown implements Narrator {
    static EMPTY: Narrator;
    static IID_IUNKNOWN: Guid$IID;
    static LOGGER: Logger;
    static getNarrator(): Narrator;
    constructor()
    active(): boolean;
    clear(): void;
    destroy(): void;
    say(arg0: string, arg1: boolean, arg2: number): void;
    // private setVolume(arg0: number): void;
}