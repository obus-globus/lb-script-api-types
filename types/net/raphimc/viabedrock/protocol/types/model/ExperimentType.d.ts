import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Experiment } from '../../../../../../net/raphimc/viabedrock/protocol/model/Experiment.d.ts'
export class ExperimentType extends Type<Experiment> {
    constructor()
    read(arg0: ByteBuf): Experiment;
    write(arg0: ByteBuf, arg1: Experiment): void;
}