
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

void display(node* list){
	printf("\nContents: \n");
	while(list!=NULL){
		printf("%d ",list->data);
		list=list->next;
	}
	printf("\n");
}


void main(){
	node* listptr=NULL;
	int  op,i;
	char n = 'y';
	while(n!='n')
	{
		system("cls");
		printf("1. Enter at start\n2. Enter at end");
		printf("\n3. Display list\n4. Exit\nEnter Choice: ");
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
						insertAtFront(&listptr, i);
				}
				display(listptr);
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
						insertAtEnd(&listptr, i);
				}
				display(listptr);
				break;
			}
			case 3:
			{
				printf("\nDisplay the list");
				display(listptr);
				break;
			}
			case 5:
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