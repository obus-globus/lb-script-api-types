import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IdentityDefinition_Type } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/IdentityDefinition_Type.d.ts'
export class ScoreboardEntry extends Object {
    constructor(arg0: number, arg1: IdentityDefinition_Type, arg2: number, arg3: string)
    // private entityUniqueId: number;
    // private fakePlayerName: string;
    // private javaName: string;
    readonly score: number;
    // private type: IdentityDefinition_Type;
    entityUniqueId(): number;
    fakePlayerName(): string;
    isSameTarget(arg0: ScoreboardEntry): boolean;
    isValid(): boolean;
    javaName(): string;
    score(): number;
    setScore(arg0: number): void;
    type(): IdentityDefinition_Type;
    updateJavaName(arg0: UserConnection): void;
    updateTarget(arg0: IdentityDefinition_Type, arg1: number, arg2: string): void;
}