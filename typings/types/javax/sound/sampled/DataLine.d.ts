import type { AudioFormat } from '../../../javax/sound/sampled/AudioFormat.d.ts'
import type { Control } from '../../../javax/sound/sampled/Control.d.ts'
import type { Control$Type } from '../../../javax/sound/sampled/Control$Type.d.ts'
import type { Line } from '../../../javax/sound/sampled/Line.d.ts'
import type { Line$Info } from '../../../javax/sound/sampled/Line$Info.d.ts'
import type { LineListener } from '../../../javax/sound/sampled/LineListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DataLine extends Line, Object{
    addLineListener(arg0: LineListener): void;
    available(): number;
    close(): void;
    drain(): void;
    flush(): void;
    getBufferSize(): number;
    getControl(arg0: Control$Type): Control;
    getFormat(): AudioFormat;
    getFramePosition(): number;
    getLevel(): number;
    getLineInfo(): Line$Info;
    getLongFramePosition(): number;
    getMicrosecondPosition(): number;
    isActive(): boolean;
    isControlSupported(arg0: Control$Type): boolean;
    isOpen(): boolean;
    isRunning(): boolean;
    open(): void;
    removeLineListener(arg0: LineListener): void;
    start(): void;
    stop(): void;
}