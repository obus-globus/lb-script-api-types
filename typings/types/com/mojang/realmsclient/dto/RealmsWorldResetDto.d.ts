import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsWorldResetDto extends Record implements ReflectionBasedSerialization {
    // private experiments: string[];
    // private generateStructures: boolean;
    // private levelType: number;
    // private seed: string;
    // private worldTemplateId: number;
    equals(o: Object | null): boolean;
    experiments(): string[];
    generateStructures(): boolean;
    hashCode(): number;
    levelType(): number;
    seed(): string;
    toString(): string;
    worldTemplateId(): number;
}