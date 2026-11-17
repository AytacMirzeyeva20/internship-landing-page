interface EmptyStateProps {
  title: string;
  description: string;
}

function EmptyState({title,description}:EmptyStateProps){
    return(
        <>
        <div className="empty_content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
        </>
    )
}
export default EmptyState;