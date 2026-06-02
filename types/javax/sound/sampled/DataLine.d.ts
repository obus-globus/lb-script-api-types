import type { AudioFormat } from '../../../javax/sound/sampled/AudioFormat.d.ts'
import type { Line } from '../../../javax/sound/sampled/Line.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DataLine extends Line, Object{
    available(): number;
    drain(): void;
    flush(): void;
    getBufferSize(): number;
    getFormat(): AudioFormat;
    getFramePosition(): number;
    getLevel(): number;
    getLongFramePosition(): number;
    getMicrosecondPosition(): number;
    isActive(): boolean;
    isRunning(): boolean;
    start(): void;
    stop(): void;
}