import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
export class Script extends Object {
    constructor(id: number, url: string, source: Source)
    constructor(id: number, url: string, source: Source, sourceLoaded: Source)
    readonly id: number;
    readonly source: Source;
    readonly sourceLoaded: Source;
    readonly url: string;
    getCharacters(): CharSequence;
    getHash(): string;
    getId(): number;
    getSource(): Source;
    getSourceLoaded(): Source;
    getUrl(): string;
    getWasmBytecode(): CharSequence;
    hasWasmSource(): boolean;
}