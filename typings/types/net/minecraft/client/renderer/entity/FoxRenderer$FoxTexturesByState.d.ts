import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FoxRenderer$FoxTexturesByAge } from '../../../../../net/minecraft/client/renderer/entity/FoxRenderer$FoxTexturesByAge.d.ts'
export class FoxRenderer$FoxTexturesByState extends Record {
    private constructor(idle: FoxRenderer$FoxTexturesByAge, sleeping: FoxRenderer$FoxTexturesByAge)
    // private idle: FoxRenderer$FoxTexturesByAge;
    // private sleeping: FoxRenderer$FoxTexturesByAge;
    equals(o: Object | null): boolean;
    hashCode(): number;
    idle(): FoxRenderer$FoxTexturesByAge;
    sleeping(): FoxRenderer$FoxTexturesByAge;
    toString(): string;
}