import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ReplaceStringParser$Consumer } from '../../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Consumer.d.ts'
import type { ReplaceStringParser$Token } from '../../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Token.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReplaceStringParser$TokenConsumer extends Object implements ReplaceStringParser$Consumer<void, ReplaceStringParser$Token[]> {
    private constructor()
    // private tokens: ReplaceStringParser$Token[];
    captureGroup(node: void, groupNumber: number, literalStart: number, literalEnd: number): void;
    getResult(): ReplaceStringParser$Token[];
    literal(node: void, start: number, end: number): void;
    match(node: void): void;
    matchHead(node: void): void;
    matchTail(node: void): void;
    namedCaptureGroup(node: void, groupName: TruffleString): void;
}