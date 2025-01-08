interface DashboardProps {
  label: string
}

export const Dashboard = ({ label }: DashboardProps) => {
  return <h1>Dashboard do {label}</h1>
}