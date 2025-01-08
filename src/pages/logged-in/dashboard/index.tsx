interface DashboardProps {
  label: string
}

export const Dashboard = ({ label }: DashboardProps) => {
  return <h1>Dashboard e sua {label}</h1>
}