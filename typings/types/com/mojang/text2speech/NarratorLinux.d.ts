import type { Narrator } from '../../../com/mojang/text2speech/Narrator.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { ExecutorService } from '../../../java/util/concurrent/ExecutorService.d.ts'
import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class NarratorLinux extends Object implements Narrator {
    static EMPTY: Narrator;
    static LOGGER: Logger;
    constructor()
    // private executionBatch: AtomicInteger;
    // private executor: ExecutorService;
    // private voiceCmuUsKal16: Pointer;
    active(): boolean;
    clear(): void;
    destroy(): void;
    say(arg0: string, arg1: boolean, arg2: number): void;
}