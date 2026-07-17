import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResolvedModel } from '../../../../../net/minecraft/client/resources/model/ResolvedModel.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModelManager$ResolvedModels extends Record {
    private constructor(missing: ResolvedModel, models: JavaMap<Identifier, ResolvedModel>)
    // private missing: ResolvedModel;
    // private models: JavaMap<Identifier, ResolvedModel>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    missing(): ResolvedModel;
    models(): JavaMap<Identifier, ResolvedModel>;
    toString(): string;
}