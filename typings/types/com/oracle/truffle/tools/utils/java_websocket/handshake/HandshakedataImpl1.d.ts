import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { HandshakeBuilder } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/HandshakeBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export class HandshakedataImpl1 extends Object implements HandshakeBuilder {
    constructor()
    readonly content: number[];
    // private map: JavaMap<string, string>;
    getContent(): number[];
    getFieldValue(arg0: string): string;
    hasFieldValue(arg0: string): boolean;
    iterateHttpFields(): Iterator<string>;
    put(arg0: string, arg1: string): void;
    setContent(arg0: number[]): void;
}