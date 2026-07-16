import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ReplaceStringParser$Consumer } from '../../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Consumer.d.ts'
import type { ReplaceStringParser$Token } from '../../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Token.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReplaceStringParser<T extends unknown> extends Object {
    static parse(paramcontext: JSContext, paramreplaceStr: TruffleString, parammaxGroupNumber: number, paramparseNamedCaptureGroups: boolean): ReplaceStringParser$Token[];
    static process(paramcontext: JSContext, paramreplaceStr: TruffleString, parammaxGroupNumber: number, paramparseNamedCaptureGroups: boolean, paramconsumer: ReplaceStringParser$Consumer<Object, Object>, paramnode: Object | null, paramprofileNode: Node, paramhasDollarBranch: InlinedBranchProfile): Object | null;
    static processParsed(paramtokens: ReplaceStringParser$Token[], paramconsumer: ReplaceStringParser$Consumer<Object, Object>, paramnode: Object | null): Object | null;
    private constructor(replaceStr: TruffleString, maxGroupNumber: number, parseNamedCaptureGroups: boolean)
    // private index: number;
    // private maxGroupNumber: number;
    // private parseNamedCaptureGroups: boolean;
    // private replaceStr: TruffleString;
    // private captureGroup(consumer: ReplaceStringParser$Consumer<T, Object>, node: T, literalEnd: number, groupNumber: number, nextIndex: number): void;
    // private hasNext(): boolean;
    // private isDigit(ch: string): boolean;
    // private literal(consumer: ReplaceStringParser$Consumer<T, Object>, node: T, literalEnd: number, nextIndex: number): void;
    // private match(consumer: ReplaceStringParser$Consumer<T, Object>, node: T, literalEnd: number, nextIndex: number): void;
    // private matchHead(consumer: ReplaceStringParser$Consumer<T, Object>, node: T, literalEnd: number, nextIndex: number): void;
    // private matchTail(consumer: ReplaceStringParser$Consumer<T, Object>, node: T, literalEnd: number, nextIndex: number): void;
    // private namedCaptureGroup(consumer: ReplaceStringParser$Consumer<T, Object>, node: T, literalEnd: number, groupName: TruffleString, nextIndex: number): void;
    // private parseNextDollar(consumer: ReplaceStringParser$Consumer<T, Object>, node: T, profileNode: Node, hasDollarBranch: InlinedBranchProfile, context: JSContext): void;
    process(consumer: ReplaceStringParser$Consumer<T, Object>, node: T, profileNode: Node, hasDollarBranch: InlinedBranchProfile, context: JSContext): void;
}