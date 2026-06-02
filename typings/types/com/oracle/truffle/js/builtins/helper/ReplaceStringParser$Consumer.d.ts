import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ReplaceStringParser$Consumer<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    captureGroup(node: T, groupNumber: number, literalStart: number, literalEnd: number): void;
    getResult(): R;
    literal(node: T, start: number, end: number): void;
    match(node: T): void;
    matchHead(node: T): void;
    matchTail(node: T): void;
    namedCaptureGroup(node: T, groupName: TruffleString): void;
}