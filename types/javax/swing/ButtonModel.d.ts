import type { ItemSelectable } from '../../java/awt/ItemSelectable.d.ts'
import type { ActionListener } from '../../java/awt/event/ActionListener.d.ts'
import type { ItemListener } from '../../java/awt/event/ItemListener.d.ts'
import type { ButtonGroup } from '../../javax/swing/ButtonGroup.d.ts'
import type { ChangeListener } from '../../javax/swing/event/ChangeListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ButtonModel extends ItemSelectable, Object{
    addActionListener(arg0: ActionListener): void;
    addChangeListener(arg0: ChangeListener): void;
    addItemListener(arg0: ItemListener): void;
    getActionCommand(): string;
    getGroup(): ButtonGroup;
    getMnemonic(): number;
    isArmed(): boolean;
    isEnabled(): boolean;
    isPressed(): boolean;
    isRollover(): boolean;
    isSelected(): boolean;
    removeActionListener(arg0: ActionListener): void;
    removeChangeListener(arg0: ChangeListener): void;
    removeItemListener(arg0: ItemListener): void;
    setActionCommand(arg0: string): void;
    setArmed(arg0: boolean): void;
    setEnabled(arg0: boolean): void;
    setGroup(arg0: ButtonGroup): void;
    setMnemonic(arg0: number): void;
    setPressed(arg0: boolean): void;
    setRollover(arg0: boolean): void;
    setSelected(arg0: boolean): void;
}