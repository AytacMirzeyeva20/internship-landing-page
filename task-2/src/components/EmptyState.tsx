interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

function EmptyState({title,description,icon}:EmptyStateProps){
    return(
        <>
        <div className="empty_content">
{icon && <div className="empty_icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
        </>
    )
}
export default EmptyState;