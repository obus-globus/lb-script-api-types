import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RopeByteString$PieceIterator } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/RopeByteString$PieceIterator.d.ts'
export class RopeByteString$RopeInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(null_: RopeByteString$RopeInputStream)
    // private currentPiece: (Object | null)[];
    // private currentPieceIndex: number;
    // private currentPieceOffsetInRope: number;
    // private currentPieceSize: number;
    // private mark: number;
    // private pieceIterator: RopeByteString$PieceIterator;
    // private advanceIfCurrentPieceFullyRead(): void;
    available(): number;
    // private initialize(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readSkipInternal(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}