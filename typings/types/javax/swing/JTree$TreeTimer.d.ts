import type { ActionEvent } from '../../java/awt/event/ActionEvent.d.ts'
import type { Timer } from '../../javax/swing/Timer.d.ts'
export class JTree$TreeTimer extends Timer {
    static getLogTimers(): boolean;
    static setLogTimers(paramarg0: boolean): void;
    constructor(null_: JTree$TreeTimer)
    fireActionPerformed(arg0: ActionEvent): void;
}