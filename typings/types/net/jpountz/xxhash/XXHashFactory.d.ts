import type { Object } from '../../../java/lang/Object.d.ts'
import type { StreamingXXHash32 } from '../../../net/jpountz/xxhash/StreamingXXHash32.d.ts'
import type { StreamingXXHash32$Factory } from '../../../net/jpountz/xxhash/StreamingXXHash32$Factory.d.ts'
import type { StreamingXXHash64 } from '../../../net/jpountz/xxhash/StreamingXXHash64.d.ts'
import type { StreamingXXHash64$Factory } from '../../../net/jpountz/xxhash/StreamingXXHash64$Factory.d.ts'
import type { XXHash32 } from '../../../net/jpountz/xxhash/XXHash32.d.ts'
import type { XXHash64 } from '../../../net/jpountz/xxhash/XXHash64.d.ts'
export class XXHashFactory extends Object {
    static fastestInstance(): XXHashFactory;
    static fastestJavaInstance(): XXHashFactory;
    static main(paramarg0: string[]): void;
    static nativeInstance(): XXHashFactory;
    static safeInstance(): XXHashFactory;
    static unsafeInstance(): XXHashFactory;
    private constructor(arg0: string)
    // private hash32: XXHash32;
    // private hash64: XXHash64;
    // private impl: string;
    // private streamingHash32Factory: StreamingXXHash32$Factory;
    // private streamingHash64Factory: StreamingXXHash64$Factory;
    hash32(): XXHash32;
    hash64(): XXHash64;
    newStreamingHash32(arg0: number): StreamingXXHash32;
    newStreamingHash64(arg0: number): StreamingXXHash64;
    toString(): string;
}