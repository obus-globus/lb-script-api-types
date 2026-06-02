import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { MaterializedFrame } from '../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { ExecutableNode } from '../../../../com/oracle/truffle/api/nodes/ExecutableNode.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
export class TruffleLanguage$InlineParsingRequest extends Object {
    constructor(source: Source, optionValues: OptionValues, node: Node, frame: MaterializedFrame)
    // private disposed: boolean;
    readonly frame: MaterializedFrame;
    // private node: Node;
    readonly optionValues: OptionValues;
    readonly source: Source;
    dispose(): void;
    getFrame(): MaterializedFrame;
    getLocation(): Node;
    getOptionValues(): OptionValues;
    getSource(): Source;
    parse(truffleLanguage: TruffleLanguage<Object>): ExecutableNode;
}