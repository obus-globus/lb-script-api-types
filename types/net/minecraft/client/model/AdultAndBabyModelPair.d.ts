import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Model } from '../../../../net/minecraft/client/model/Model.d.ts'
export class AdultAndBabyModelPair<T extends Model<Object>> extends Record {
    constructor(adultModel: T, babyModel: T)
    // private adultModel: T;
    // private babyModel: T;
    adultModel(): T;
    babyModel(): T;
    equals(o: Object | null): boolean;
    getModel(isBaby: boolean): T;
    hashCode(): number;
    toString(): string;
}