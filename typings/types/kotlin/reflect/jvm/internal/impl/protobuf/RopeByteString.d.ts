import type { ByteString$Output } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ByteString$Output.d.ts'
export class RopeByteString {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static EMPTY: number[];
    static copyFrom(paramarg0: number[]): number[];
    static copyFrom(paramarg0: number[], paramarg1: number, paramarg2: number): number[];
    static copyFrom(paramarg0: number[][]): number[];
    static copyFromUtf8(paramarg0: string): number[];
    static newOutput(): ByteString$Output;
}