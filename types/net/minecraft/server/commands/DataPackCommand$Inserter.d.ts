import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pack } from '../../../../net/minecraft/server/packs/repository/Pack.d.ts'
export interface DataPackCommand$Inserter extends Object{
    apply(selected: Pack[], pack: Pack): void;
}