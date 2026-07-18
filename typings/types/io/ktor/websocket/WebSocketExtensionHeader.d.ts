import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
export class WebSocketExtensionHeader extends Object {
    constructor(name: string, parameters: string[])
    readonly name: string;
    readonly parameters: string[];
    // private parametersToString(): string;
    parseParameters(): Sequence<Pair<string, string>>;
    toString(): string;
}