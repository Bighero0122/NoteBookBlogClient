import { WithLayout } from "components";
import { DashboardContainer } from "containers";
import React from "react";

const Dashboard: React.FC = () => {
  return <DashboardContainer />;
};

export const DashboardPage = WithLayout(Dashboard);
