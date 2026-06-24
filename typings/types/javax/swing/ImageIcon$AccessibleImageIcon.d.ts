import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { AccessibleIcon } from '../../javax/accessibility/AccessibleIcon.d.ts'
import type { AccessibleRole } from '../../javax/accessibility/AccessibleRole.d.ts'
import type { AccessibleStateSet } from '../../javax/accessibility/AccessibleStateSet.d.ts'
import type { ImageIcon } from '../../javax/swing/ImageIcon.d.ts'
export class ImageIcon$AccessibleImageIcon extends AccessibleContext implements Serializable, AccessibleIcon {
    static ACCESSIBLE_ACTION_PROPERTY: string;
    static ACCESSIBLE_ACTIVE_DESCENDANT_PROPERTY: string;
    static ACCESSIBLE_CARET_PROPERTY: string;
    static ACCESSIBLE_CHILD_PROPERTY: string;
    static ACCESSIBLE_COMPONENT_BOUNDS_CHANGED: string;
    static ACCESSIBLE_DESCRIPTION_PROPERTY: string;
    static ACCESSIBLE_HYPERTEXT_OFFSET: string;
    static ACCESSIBLE_INVALIDATE_CHILDREN: string;
    static ACCESSIBLE_NAME_PROPERTY: string;
    static ACCESSIBLE_SELECTION_PROPERTY: string;
    static ACCESSIBLE_STATE_PROPERTY: string;
    static ACCESSIBLE_TABLE_CAPTION_CHANGED: string;
    static ACCESSIBLE_TABLE_COLUMN_DESCRIPTION_CHANGED: string;
    static ACCESSIBLE_TABLE_COLUMN_HEADER_CHANGED: string;
    static ACCESSIBLE_TABLE_MODEL_CHANGED: string;
    static ACCESSIBLE_TABLE_ROW_DESCRIPTION_CHANGED: string;
    static ACCESSIBLE_TABLE_ROW_HEADER_CHANGED: string;
    static ACCESSIBLE_TABLE_SUMMARY_CHANGED: string;
    static ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED: string;
    static ACCESSIBLE_TEXT_PROPERTY: string;
    static ACCESSIBLE_VALUE_PROPERTY: string;
    static ACCESSIBLE_VISIBLE_DATA_PROPERTY: string;
    constructor(null_: ImageIcon)
    getAccessibleChild(arg0: number): Accessible;
    getAccessibleChildrenCount(): number;
    getAccessibleIconDescription(): string;
    getAccessibleIconHeight(): number;
    getAccessibleIconWidth(): number;
    getAccessibleIndexInParent(): number;
    getAccessibleParent(): Accessible;
    getAccessibleRole(): AccessibleRole;
    getAccessibleStateSet(): AccessibleStateSet;
    getLocale(): Locale;
    // private readObject(arg0: ObjectInputStream): void;
    setAccessibleIconDescription(arg0: string): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}