import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Buffer } from '../../../../kotlinx/io/Buffer.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
import type { ByteString } from '../../../../kotlinx/io/bytestring/ByteString.d.ts'
export class ByteChannelScanner extends Object {
    constructor(channel: ByteReadChannel, matchString: ByteString, writeChannel: ByteWriteChannel, limit: number)
    // private bytesRead: number;
    // private channel: ByteReadChannel;
    // private input: Source;
    // private limit: number;
    // private matchIndex: number;
    // private matchString: ByteString;
    // private partialMatchBuffer: Buffer;
    // private partialMatchTable: number[];
    // private writeChannel: ByteWriteChannel;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private advanceToNextPotentialMatch($completion: Continuation<void>): any;
    // private buildPartialMatchTable(): number[];
    // private checkBounds(extra: number): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private checkFullMatch($completion: Continuation<boolean>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    findNext(ignoreMissing: boolean, $completion: Continuation<number>): any;
}