import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class SideChainPart extends Enum<SideChainPart> implements StringRepresentable {
    static CENTER: SideChainPart;
    static LEFT: SideChainPart;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RIGHT: SideChainPart;
    static UNCONNECTED: SideChainPart;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SideChainPart;
    static values(): SideChainPart[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    isChainEnd(): boolean;
    isConnected(): boolean;
    isConnectionTowards(endPart: SideChainPart): boolean;
    toString(): string;
    whenConnectedToTheLeft(): SideChainPart;
    whenConnectedToTheRight(): SideChainPart;
    whenDisconnectedFromTheLeft(): SideChainPart;
    whenDisconnectedFromTheRight(): SideChainPart;
    name(): "UNCONNECTED" | "RIGHT" | "CENTER" | "LEFT";
}