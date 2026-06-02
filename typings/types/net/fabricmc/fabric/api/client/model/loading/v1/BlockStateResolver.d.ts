import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockStateResolver$Context } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/BlockStateResolver$Context.d.ts'
export interface BlockStateResolver extends Object{
    resolveBlockStates(arg0: BlockStateResolver$Context): void;
}