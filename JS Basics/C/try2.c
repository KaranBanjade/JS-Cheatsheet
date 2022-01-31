
#include<stdio.h>
#include<stdlib.h>

typedef struct Node{
	struct Node* prev;
	int data;
	struct Node* next;
}node;

node* createNewNode(){
	return (node*)malloc(sizeof(node));
}
void insertAtFront(node **ptr,int ele){
	node* tmp = createNewNode();
	tmp->data=ele;
	if(*ptr==NULL){
		tmp->prev=NULL;
		tmp->next=NULL;
		*ptr=tmp;
		return;
	}
	tmp->next=*ptr;
	(*ptr)->prev=tmp;
	tmp->prev=NULL;
	*ptr=tmp;
}
void insertAtEnd(node **ptr,int ele){
	node* tmp = createNewNode();
	tmp->data=ele;
	if(*ptr==NULL){
		tmp->prev=NULL;
		tmp->next=NULL;
		*ptr=tmp;
		return;
	}
	
	node* move=*ptr;
	while(move->next!=NULL){
		move=move->next;
	}
	move->next=tmp;
	tmp->prev=move;
	tmp->next=NULL;
}

void insertAfter(int d, int after,node *var){
	node *tmp,*newer;
	newer=createNewNode();
	newer->data=d;
	while(var!=NULL && var->data!=after)
		var=var->next;
	if(var==NULL){
		printf("Element %d wasn\'t found!\n",after);
		printf("Therefore %d wasn't added\n",d);
		return;
	}
	tmp=var->next;
	var->next=newer;
	newer->prev=var;
	newer->next=tmp;
	tmp->prev=newer;
}
void display(node* list){
	printf("\nContents: \n");
	node* rev=NULL;						// For Testing Previous node of DLL
	while(list!=NULL){
		printf("%d ",list->data);
		rev=list;						// For Testing Previous node of DLL
		list=list->next;
	}
	printf("\n");
	printf("\nTesting Previous node of DLL:\n");
	while(rev!=NULL){
		printf("%d ",rev->data);
		rev=rev->prev;
	}
	printf("\n");
}

void insertBefore(int d, int before,node **ptr){	
	node *var=*ptr,*tmp,*newer,*prev=NULL;
	newer=createNewNode();
	newer->data=d;
	if(before==var->data){
		newer->next=var;
		var->prev=newer;
		newer->prev=NULL;
		*ptr=newer;
		return;
	}
	
	while( var!=NULL && var->data!=before){
		prev=var;
		var=var->next;
	}
	if(var==NULL ){
		printf("Element %d wasn\'t found!\n",before);
		printf("Therefore %d wasn't added\n",d);
		return;
	}
	tmp=prev->next;
	prev->next=newer;
	newer->prev=prev;
	newer->next=tmp;
	tmp->prev=newer;	
}
void deleteAtFront(node** ptr){
	if( *ptr == NULL){
    	printf("List Empty\n");
        return; 			
    }
  	node* tmp = *ptr;
  	*ptr = tmp->next;
	(*ptr)->prev=NULL;
		free(tmp);
}
void deleteAtEnd(node** ptr){
	if( *ptr == NULL){
    	printf("List Empty\n");
        return; 			
    }
  	node* tmp = *ptr,*back=NULL,*del;
	while(tmp->next!=NULL){
		back=tmp;
		tmp=tmp->next;
	}
	if(back==NULL){
		del=*ptr;
		*ptr=NULL;
		free(del);
		return;
	}
	
	del=back->next;
  	back->next=tmp->next;
	free(del);	
}

void deleteParticular(node** ptr,int ele){
	if( *ptr == NULL){
    	printf("List Empty\n");
        return; 			
    }
  	node* tmp = *ptr,*back=NULL,*del;
	while(tmp!=NULL && tmp->data!=ele){
		back=tmp;
		tmp=tmp->next;
	}
	if(back==NULL){
		del=*ptr;
		*ptr=(*ptr)->next;
		(*ptr)->prev=NULL;
		free(del);
		return;
	}	
	if(tmp==NULL){
		printf("Element %d doesn't exist in the List\n",ele);
		return;
	}
	del=back->next;
  	back->next=tmp->next;
	tmp->next->prev=back;
	free(del);	
}

int countNode(node* list){
	int n=0;
	while(list!=NULL){
		n++;
		list=list->next;
	}
	return n;
}

node* searchNode(node* list,int ele){
	while(list!=NULL && list->data!=ele)
		list=list->next;
	return list;
}

void main(){
	node* listptr=NULL;
	int n,inp;
	int op,i;
	char n = 'y';
	while(n!='n')
	{
		system("cls");
		printf("1. Enter at start\n2. Enter at end\n3. Enter before a node");
		printf("\n4. Enter after a node\n5. Delete at start\n6. Delete at end\n7. Delete at N");
		printf("\n8. Reverse List\n9. Count Nodes\n10. Display list");
		printf("\n13. Exit\nEnter Choice: ");
		scanf("%d", &op);
		system("cls");

		switch(op)
		{
			case 1:
			{	
				i=1;
				printf("\nInsertion at Start\n");
				while(i)
				{
					printf("Enter to Push: ");
					scanf("%d",&i);	
					if(i!=0)
						insertAtFront(listptr, i);
				}
				break;
			}
		
			case 2:
			{
				i=1;
				printf("\nInsertion at End\n");
				while(i)
				{
					printf("Enter to Push: ");
					scanf("%d",&i);	
					if(i!=0)
						insertAtEnd(listptr, i);
				}
				break;
			}
		
			case 4:
			{
				printf("\nEntering Before a Value\n");
				printf("Enter Input to Push: ");
				scanf("%d", &i);
				insertBefore(i,listptr);
				break;
			}
			
			case 5:
			{	
				printf("\nEntering after a Value\n");
				printf("Enter input to Push: ");
				scanf("%d", &i);
				Insertafter(i,listptr);
				break;
			}
			
			case 6:
			{
				printf("\nDeleting at Begining");
				DeleteStart(listptr);
				break;
			}
			
			case 7:
			{
				printf("\nDeleting at End");
				DeleteEnd(listptr);
				break;
			}
			
			case 8:
			{
				printf("\nDeleting at N");
				DeleteN(listptr);
				break;
			}
			
			case 9:
			{
				printf("\nReversing the list");
				rev(listptr);
				break;
			}
			
			case 10:
			{
				printf("\nSort the list");
				(listptr);
				break;
			}
			
			case 11:
			{
				printf("\nCounting number of nodes in list");
				countNode(listptr);
				break;
			}
			
			case 12:
			{
				printf("\nDisplay the list");
				disp(listptr);
				break;
			}
			
			case 13:
			{
				printf("\nExiting!!");
				getch();
				exit(0);
			}
			
			default:
				printf("\nInvalid Input!");	
		}
		
	printf("\nPress Enter to Clear screen...");
	getch();
	system("cls");
	fflush(stdin);
	printf("\nWant More?(y/n)");
	scanf("%c",&n);
	}
printf("\nExiting");
getch();
}