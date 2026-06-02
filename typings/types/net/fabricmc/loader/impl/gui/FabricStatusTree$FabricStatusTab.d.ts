import type { DataInputStream } from '../../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricStatusTree$FabricStatusNode } from '../../../../../net/fabricmc/loader/impl/gui/FabricStatusTree$FabricStatusNode.d.ts'
import type { FabricStatusTree$FabricTreeWarningLevel } from '../../../../../net/fabricmc/loader/impl/gui/FabricStatusTree$FabricTreeWarningLevel.d.ts'
export class FabricStatusTree$FabricStatusTab extends Object {
    constructor(arg0: DataInputStream)
    constructor(arg0: string)
    filterLevel: FabricStatusTree$FabricTreeWarningLevel;
    node: FabricStatusTree$FabricStatusNode;
    addChild(arg0: string): FabricStatusTree$FabricStatusNode;
    writeTo(arg0: DataOutputStream): void;
}