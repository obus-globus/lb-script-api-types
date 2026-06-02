import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InternalJsonReader } from '../../../../kotlinx/serialization/json/internal/InternalJsonReader.d.ts'
export abstract class InternalJsonReaderCodePointImpl extends Object implements InternalJsonReader {
    constructor()
    // private bufferedChar: string | null;
    exhausted(): boolean;
    nextCodePoint(): number;
    read(buffer: string[], bufferOffset: number, count: number): number;
}