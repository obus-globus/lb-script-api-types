import type { BaseModel } from '../../../../ai/djl/BaseModel.d.ts'
import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { Trainer } from '../../../../ai/djl/training/Trainer.d.ts'
import type { TrainingConfig } from '../../../../ai/djl/training/TrainingConfig.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PtModel extends BaseModel {
    constructor(arg0: string, arg1: Device)
    // private findModelFile(arg0: string[]): Path[];
    getArtifactNames(): string[];
    load(arg0: InputStream): void;
    load(arg0: InputStream, arg1: boolean): void;
    load(arg0: InputStream, arg1: { [key: string]: Object | null }): void;
    load(arg0: Path[]): void;
    load(arg0: Path[], arg1: string): void;
    load(arg0: Path[], arg1: string, arg2: { [key: string]: Object | null }): void;
    newTrainer(arg0: TrainingConfig): Trainer;
}