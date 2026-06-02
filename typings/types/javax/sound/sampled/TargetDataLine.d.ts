import type { AudioFormat } from '../../../javax/sound/sampled/AudioFormat.d.ts'
import type { DataLine } from '../../../javax/sound/sampled/DataLine.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TargetDataLine extends DataLine, Object{
    open(arg0: AudioFormat): void;
    open(arg0: AudioFormat, arg1: number): void;
    read(arg0: number[], arg1: number, arg2: number): number;
}