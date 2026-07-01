import type { DataInputStream } from '../../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../../java/io/DataOutputStream.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FabricStatusTree$FabricTreeWarningLevel } from '../../../../../net/fabricmc/loader/impl/gui/FabricStatusTree$FabricTreeWarningLevel.d.ts'
export class FabricStatusTree$FabricStatusNode extends Object {
    constructor(arg0: FabricStatusTree$FabricStatusNode, arg1: DataInputStream)
    constructor(arg0: FabricStatusTree$FabricStatusNode, arg1: string, arg2: any)
    children: FabricStatusTree$FabricStatusNode[];
    details: string;
    expandByDefault: boolean;
    iconType: string;
    name: string;
    // private parent: FabricStatusTree$FabricStatusNode;
    readonly warningLevel: FabricStatusTree$FabricTreeWarningLevel;
    // private addChild(arg0: string): FabricStatusTree$FabricStatusNode;
    addCleanedException(arg0: Throwable): FabricStatusTree$FabricStatusNode;
    addException(arg0: Throwable): FabricStatusTree$FabricStatusNode;
    // private addException(arg0: Throwable, arg1: StackTraceElement[]): FabricStatusTree$FabricStatusNode;
    addMessage(arg0: string, arg1: FabricStatusTree$FabricTreeWarningLevel): FabricStatusTree$FabricStatusNode;
    // private cleanForNode(arg0: string): string;
    getFileNode(arg0: string, arg1: string, arg2: string): FabricStatusTree$FabricStatusNode;
    getMaximumWarningLevel(): FabricStatusTree$FabricTreeWarningLevel;
    mergeChildFilePaths(arg0: string): void;
    mergeSingleChildFilePath(arg0: string): void;
    mergeWithSingleChild(arg0: string): void;
    moveTo(arg0: FabricStatusTree$FabricStatusNode): void;
    setError(): void;
    setInfo(): void;
    setWarning(): void;
    setWarningLevel(arg0: FabricStatusTree$FabricTreeWarningLevel): void;
    writeTo(arg0: DataOutputStream): void;
}