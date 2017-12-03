import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {BaseComponentProps} from "../BaseComponent";
import {IAccess} from "../../service/AuthService";
import {Icon} from "./Icon";

export interface DataTableOperationsProps extends BaseComponentProps {
    path: string;
    id: number;
    access: IAccess;
    onDelete: (e) => void;
}

export interface DataTableOperationsState {
}

export class DataTableOperations extends PureComponent<DataTableOperationsProps, DataTableOperationsState> {

    constructor(props: DataTableOperationsProps) {
        super(props);
        this.state = {};
    }

    public render() {
        const {path, access, id, onDelete} = this.props;
        const editLink = access.edit ? <Link to={`/${path}/edit/${id}`}><Icon name="mode_edit"/></Link> : null;
        const delLink = access.del ?
            <Link to={`/${path}/del/${id}`} onClick={onDelete}><Icon name="delete"/></Link> : null

        return (
            <span className="datatable-operations dt-operation-cell">
                <Link to={`/${path}/detail/${id}`}><Icon name="search"/></Link>
                {editLink}
                {delLink}
            </span>
        )
    }
}