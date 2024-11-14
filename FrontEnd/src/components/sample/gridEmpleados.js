import React from 'react';
import {
  Column,
  DataGrid,
  Editing,
  RemoteOperations
} from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.light.css";
import { useStore } from './storeContext';
import DashboardCard from 'src/components/shared/DashboardCard';

const GridEmpleados = () => {
  const { store } = useStore();

  return (
    <DashboardCard title="Tabla Productos">
      <DataGrid
          dataSource={store}
          showBorders={true}
          repaintChangesOnly={true}
          height={600}
        >
          <Editing
            mode="row"
            allowAdding={true}
            allowDeleting={true}
            allowUpdating={true}
          />
      </DataGrid>
    </DashboardCard>
  );
}

export default GridEmpleados;